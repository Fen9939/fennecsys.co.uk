const template = document.createElement('template');

template.innerHTML = `
    <nav>
        <ul>
            <li><a href="/home.html">Home</a></li>
            <li><a href="/Pages/about.html">About us</a></li>
            <li><a href="/Pages/contact.html">Contact us</a></li>
        </ul>
    </nav>
`;

document.body.appendChild(template.content);