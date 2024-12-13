const usernames = ['json.weee', 'Reem Belafkih', 'Finka'];
const postsContainer = document.getElementById('posts-container');
const userIds = [1, 2, 3];




const userImages = [
  'ada.jpeg',
  'reem.png',
  'jason.png'  
];

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  })
  .then(posts => {
    posts.slice(0, 12).forEach(post => { 
      const postHTML = ` 

        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `; 

      postsContainer.innerHTML += postHTML;
    });

  })
  .catch(error => console.error('Error:', error));


userIds.forEach((userId, index) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch data for user ${userId}. Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const address = data.address;


      const addressHTML = `
        <div class="user-address">
          <!-- Profile Image -->
          <img src="${userImages[index]}" alt="User ${userId}" class="user-image">
          <h2>${usernames[index]}</h2>
          <p><strong>Street:</strong> ${address.street}</p>
          <p><strong>Suite:</strong> ${address.suite}</p>
          <p><strong>City:</strong> ${address.city}</p>
          <p><strong>Zipcode:</strong> ${address.zipcode}</p>
          <p><strong>Latitude:</strong> ${address.geo.lat}</p>
          <p><strong>Longitude:</strong> ${address.geo.lng}</p>
        </div>
      `;


      document.getElementById('text').innerHTML += addressHTML;
    })
    .catch(error => console.error('Error:', error));
});
