(function ($) {
    $(function () {
        // Materialize sample navbar
        $('.sidenav').sidenav();
        // Intercept API query form and send to a different url
        $('#apiQueryForm').submit(event => {
            event.preventDefault();
            $(location).attr('href', `/report?${$('#apiQueryForm').serialize()}`)
        })
    }); // end of document ready
})(jQuery); // end of jQuery name space

// $(document).ready(function(){
//   $('input.autocomplete').autocomplete({
//     data: {
//       "Apple": null,
//       "Microsoft": null,
//       "Google": 'https://placehold.it/250x250'
//     },
//   });
//          // Aries Demo API form autocomplete
//       $('input.autocomplete-school-id').autocomplete({
//           data: {
//               "994": 'https://placehold.it/250x250'
//           },
//       });
//       $('input.autocomplete-student-id').autocomplete({
//           data: {
//               "99400002":null
//           },
//       });
//       $('input.autocomplete-aries-api-key').autocomplete({
//           data: {
//               "477abe9e7d27439681d62f4e0de1f5e1": null,
//               "Apple": null,
//               "Microsoft": null,
//               "Google": 'https://placehold.it/250x250'
//           },
//       });
// });
