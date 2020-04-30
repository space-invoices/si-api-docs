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
  var code_block = $('pre.highlight.json');
  code_block.each(function() { $(this).followTo(); });

  /**
   * Login / Logout
   */

  /**
   * Populate logged in user's data
   */
  const token = readCookie('$LoopBackSDK$id');
  const accountId = readCookie('$LoopBackSDK$userId');
  const langSelector = $('.lang-selector');

  if (token) {
    $('code span:contains("LAUNCH_CODE")').each(function() {
      let text = $(this).text();
      $(this).text(text.replace('LAUNCH_CODE', token));
    });

    // Get organizations
    $.get(`https://api-test.spaceinvoices.com/v1/accounts/${accountId}/organizations?access_token=${token}`)
      .done(function(data) {
        if (data) {
          $('code span:contains("ORG_ID")').each(function() {
            let text = $(this).text();
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
  var $window = $(window);
  var padd = 50;
  var topO = $this.position().top;
  var height = $this.height();

  var $h1N = $('~ h1:nth(0)', $this);
  var $h2N = $('~ h2:nth(0)', $this);
  var bottom1 = $h1N.position().top;
  var bottom2 = $h2N.position().top;
  var bottom = bottom1;

  if (bottom2 < bottom1) bottom = bottom2;

  var max = bottom - height;
  var sectionHeight = bottom - topO;

  if (height < sectionHeight) {
    $window.scroll(function() {
      var top = $window.scrollTop();
      var topP = top + padd;

      if (topP > topO) {
        if (topP > max) {
          $this.css({
            position: 'fixed',
            top: max,
            right: 0
          });
        } else {
          $this.css({
            position: '-webkit-sticky',
            position: 'sticky',
            top: padd,
            right: 0
          });
        }
      } else {
        $this.css({
          position: 'inherit',
          top: 'inherit',
          right: 'inheirt'
        });
      }
    });
  }

  $window.resize(function() {
    height = $this.height();
    max = bottom - height;
  });
}