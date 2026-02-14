import '../styles/About.css';
export default function About() {
  return (
    <div className="containerr" id='about'>
        <div className="back-container">
            <div className="about">
                <h1>About This App</h1>
                <p>Vanrangini is a jewelry brand that draws inspiration from the enchanting beauty of nature. Our collection features exquisite pieces crafted with meticulous attention to detail, capturing the essence of the natural world. Each design is a celebration of the intricate patterns and vibrant colors found in flora and fauna, making our jewelry a unique expression of elegance and artistry.</p>
                <p>At Vanrangini, we believe that jewelry is not just an accessory but a form of self-expression. Our pieces are designed to evoke a sense of wonder and connection to the natural world, allowing you to carry a piece of nature's beauty with you wherever you go. Whether you're looking for a statement piece or a delicate accent, Vanrangini offers a diverse range of jewelry that celebrates the magic of nature.</p> 
            </div>
            <div className="contact">
                <h1>Contact Us</h1>
                <p>If you have any questions, feedback, or inquiries, please feel free to reach out to us at.</p>
                <p><i className="bi bi-envelope-at-fill"></i> : <a href="mailto:saiadabala1919@gmail.com">saiadabala1919@gmail.com</a></p>
                <p><i className="bi bi-whatsapp"></i> : <a href="https://wa.me/+918074336123">Chat with us</a></p>
                <p><i className="bi bi-linkedin"></i> : <a href="https://www.linkedin.com/in/jaya-sai-adabala/">Jaya Sai Adabala</a></p>
                <p><i className="bi bi-github"></i> : <a href="https://github.com/jayasaiadabala">jayasaiadabala</a></p>

            </div>
            <div className="footer">
                <p>&copy; 2026 Vanrangini. All rights reserved.</p>
            </div>
        </div>
    </div>
  );
}