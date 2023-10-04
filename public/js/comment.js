async function commentFormHandler(event) {
    event.preventDefault();
    //selects the input element with the name attribute "comment-body" and retrieves its value
    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
  //retrieves the current URL using window.location.toString(). 
  //It then splits the URL into an array of segments using the '/' character as the separator
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  //The request is made using the fetch() function to make HTTP requests 
  //The request method is set to 'POST' and the request body is a JSON stringified 
  //object containing the post_id and comment_text values
   if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
          
        } else {
          alert(response.statusText);
          document.querySelector('#comment-form').style.display = "block";
        }
      }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);