# Smart codes

Smart codes are a mechanism that allows placing codes in some text fields that later get replaced by actual values.  
For instance we can place the following text inside a Document's `note` field:  
`When paying please use reference [document number]`  
The `[document number]` notation will get replaced when creating the Document PDF.

Why does this work better than just using the actual document number?  
Imagine creating a copy of the mentioned document by copying its values, this would leave us with a note that contains the invalid document number reference. If we instead use the smart code annotation we don't have to worry about the correct number being populated on each document.

**Primarily smart codes are used in document properties `note`, `signature` and `footer`.**

### Types of smart codes:

#### Your organization

**[organization name]**

---

**[IBAN]**  
Bank account number

---

**[SWIFT]**  
SWIFT / BIC code of bank

---

**[bank]**  
Name of bank

---

**[address]**

---

**[address2]**

---

**[zip]**  
Zip / postal code

---

**[city]**

---

**[country]**

---

**[tax number]**

---

**[company number]**

---

#### Document

**[document number]**
Current document number.

---
