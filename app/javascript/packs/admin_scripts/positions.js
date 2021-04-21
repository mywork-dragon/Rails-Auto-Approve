document.addEventListener("DOMContentLoaded", function () {
  /*var editor = new FroalaEditor('#description', {
    toolbarButtons: [
      'fontSize', 'bold', 'italic', 'underline', 'textColor', 'alignLeft', 
      'alignCenter', 'alignRight', 'alignJustify', 'formatOL', 'formatUL',
      'insertImage', 'insertTable', 'insertLink', 'emoticons'
    ],
    placeholderText: 'Job description',
    height: 300,
    
    imageUploadURL: '/admin/attachment/upload.json',
    imageUploadMethod: 'POST'
  });*/
})

document.addEventListener("DOMContentLoaded", function () {
  
  var edit = new Quill('#editorQuilljs', {
    theme: 'snow',
    modules: {
      toolbar: [
          [{ 'header': [1, 2, 3, false] }],
          [{ 'color': [] }, { 'background': [] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          ['clean'],
          [ 'link', 'image', 'video', 'formula' ],
      ]
    },
    placeholder: 'Content',

    imageUploadURL: '/admin/attachment/upload.json',
    imageUploadMethod: 'POST'

  });

  document.querySelector('form').onsubmit = function () {
    var content = document.getElementById('content-quil');

    console.log('content :>> ', content);
    content.value = edit.root.innerHTML
  };
  
  /*new FroalaEditor('#description-resource', {
    toolbarButtons: [
      'fontSize', 'bold', 'italic', 'underline', 'textColor', 'alignLeft', 
      'alignCenter', 'alignRight', 'alignJustify', 'formatOL', 'formatUL',
      'insertImage', 'insertTable', 'insertLink', 'emoticons'
    ],
    placeholderText: 'Resource description',
    height: 300,
    
    imageUploadURL: '/admin/attachment/upload.json',
    imageUploadMethod: 'POST'
  });*/
})

// Validation functions
window.required_validation = function (val) {
  if (val && val.length > 0)
    return true;
  else
    return false;
}

// Show/hide element
window.setItemDisplay = function (id, style) {
  if (form_submitted)
    document.getElementById(id).style.display = style;
}

var form_submitted = false;
window.get_required_validation = function (value, id) {
  if (required_validation(value)) {
    setItemDisplay(id, 'none');
    return true;
  } else {
    setItemDisplay(id, 'block');
    return false;
  }
}

window.onTextValidation = function (e) {
  var id = e.target.id + "_required";
  get_required_validation(e.target.value, id);
}  

window.onSwitch = function () {
  if (document.getElementById('live').checked) {
    document.getElementById('livetext').style.color = '#44e0b7';
  } else {
    document.getElementById('livetext').style.color = '#898A8D';
  }
}

window.form_submit = function (e) {
  e.preventDefault();
  form_submitted = true;

  const title_valid = get_required_validation(document.getElementById('title').value, 'title_required');
  const location_valid = get_required_validation(document.getElementById('location').value, 'location_required');
  const catemail_valid = get_required_validation(document.getElementById('cta_email').value, 'cta_email_required');
  
  if (title_valid && location_valid && catemail_valid) {
    // submit
    
    document.getElementById('live').checked; // live value

    return true
  }
}  