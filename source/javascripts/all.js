//= require ./all_nosearch
//= require ./app/_search

$(document).ready(function() {
  /**
  * Functionality to toggle nested model definitions
  */
  var expand_btn = $('a[href="#expand"]');
  var expand_inner_btn = $('a[href="#expand-inner"]');
  var empty_btn_parent = $('a[href="#empty"]').parent()
    .addClass('empty');
  var empty_inner_btn_parent = $('a[href="#empty-inner"]').parent()
    .addClass('empty');
  
  expand_btn.click(toggleInner);
  expand_inner_btn.click(toggleInner);
  
  expand_btn.parent()
    .nextUntil(empty_btn_parent)
    .addClass('nested')
    .hide();
  
  expand_inner_btn.parent()
    .nextUntil(empty_inner_btn_parent)
    .addClass('inner');
  
  function toggleInner(e) {
    e.preventDefault();
    
    var parent = $(this).parent();
    
    if ($(this).attr('href') === '#expand') {
      if (parent.next().is(':hidden')) {
        parent.nextUntil(empty_btn_parent).not('.nested.inner')
          .show();
      } else {
        parent.nextUntil(empty_btn_parent)
          .hide();
      }
      
    } else {
      parent.nextUntil(empty_inner_btn_parent)
        .toggle();
    }
  }

  /**
   * Make right side code preview scroll with page
   */
  var code_block = $('.highlight pre.highlight.json');
  code_block.each(function() { $(this).followTo(); });

  /**
   * Login / Logout
   */

  /**
   * Populate logged in user's data
   */
  var token;
  var accountId;
  var langSelector = $('.lang-selector');

  try {
    var cookie = JSON.parse(readCookie('token'));
    token = cookie.id;
    accountId = cookie.userId;
  } catch (e) {}

  if (token) {
    $('code span:contains("LAUNCH_CODE")').each(function() {
      var text = $(this).text();
      $(this).text(text.replace('LAUNCH_CODE', token));
    });

    // Get organizations
    $.get('https://api.spaceinvoices.com/v1/accounts/' + accountId + '/organizations?access_token=' + token)
      .done(function(data) {
        if (data) {
          $('code span:contains("ORG_ID")').each(function() {
            var text = $(this).text();
            $(this).text(text.replace('ORG_ID', data[0].id));
          });
        }

        langSelector.append('<a class="login-btn" href="#authentication">Using your token</a>');
      })
      .fail(function() {
        deleteCookie('$LoopBackSDK$id');
        deleteCookie('$LoopBackSDK$userId');
        langSelector.append('<a class="login-btn" href="https://spaceinvoices.com/login">Log in</a>');
      });
  } else {
    langSelector.append('<a class="login-btn" href="https://spaceinvoices.com/login">Log in</a>');
  }

  if (token) {
    $('code span:contains("ACCOUNT_ID")').each(function() {
      $(this).text($(this).text().replace('ACCOUNT_ID', accountId));
    });
  }
});

function createCookie(name, value, days) {
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
  }
  else var expires = "";               

  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function deleteCookie(name) {
  createCookie(name, "", -1);
}

$.fn.followTo = function() {
  var $this = this;
  var $container = this.parent();
  var $window = $(window);
  var padd = 40;
  var topO = $this.position().top;
  var height = $this.height();
  var windowWidth = $window.width();

  var $h1N = $('~ h1:nth(0)', $container);
  var $h2N = $('~ h2:nth(0)', $container);
  var bottom1 = $h1N.position().top;
  var bottom2 = $h2N.position().top;
  var bottom = bottom1;

  if (bottom2 < bottom1) bottom = bottom2;

  var max = bottom - height;
  var sectionHeight = bottom - topO;

  if (windowWidth > 700 && height < sectionHeight) {
    $window.scroll(function() {
      var top = $window.scrollTop();
      var topP = top + padd;

      if (topP > topO) {
        if (topP > max) {
          // Reached bottom (near next sliding element)
          // Stop scrolling
          $container.css({
            position: 'fixed',
            top: max,
            right: 0,
            width: '50%',
          });

          $this.css({
            position: 'absolute',
            right: '0',
            width: '100%',
          });
        } else {
          // Normal scrolling with view
          $container.css({
            position: '-webkit-sticky',
            position: 'sticky',
            top: padd,
            right: 0,
            width: '',
          });

          $this.css({
            position: 'absolute',
            right: '0',
            width: '',
          });
        }
      } else {
        $container.css({
          position: 'inherit',
          top: 'inherit',
          right: 'inheirt',
          width: '',
        });

        $this.css({
          position: '',
          right: '',
          width: '',
        });
      }
    });
  }

  $window.resize(function() {
    height = $this.height();
    windowWidth = $window.width();
    max = bottom - height;
  });
}