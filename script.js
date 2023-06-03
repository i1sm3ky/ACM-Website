const EvenBlogCards = document.querySelectorAll(".Blog-Card-Even")
const OddBlogCards = document.querySelectorAll(".Blog-Card-Odd")

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    EvenBlogCards.forEach(EvenCard => {
        EvenCard.classList.add("Show-Blog-Text-Mobile")
        EvenCard.children[1].classList.add("Blog-Preview-Text-Mobile")
        EvenCard.children[1].innerHTML = `<h1 class="Blog-Titles">Title</h1>
        <p class="Blog-Text">Preview of the blog.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, impedit, dicta illum cumque aliquid nobis ab sed dignissimos repellat amet deserunt ratione inventore sapiente quasi deleniti eveniet tempore quibusdam adipisci repellendus, quaerat debitis tenetur expedita eius quisquam? Culpa, obcaecati quo.</p>
        <a href="" class="Blog-Links">Read more!</a>`
    })
    OddBlogCards.forEach(OddCard => {
        OddCard.classList.add("Show-Blog-Text-Mobile")
        OddCard.children[1].classList.add("Blog-Preview-Text-Mobile")
        OddCard.children[1].innerHTML = `<h1 class="Blog-Titles">Title</h1>
        <p class="Blog-Text">Preview of the blog.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, impedit, dicta illum cumque aliquid nobis ab sed dignissimos repellat amet deserunt ratione inventore sapiente quasi deleniti eveniet tempore quibusdam adipisci repellendus, quaerat debitis tenetur expedita eius quisquam? Culpa, obcaecati quo.</p>
        <a href="" class="Blog-Links">Read more!</a>`
    })
} else {
    const EvenObserver = new IntersectionObserver(EvenCards => {
        EvenCards.forEach(EvenBlogCard => {
            EvenBlogCard.target.classList.toggle("Show-Blog-Text-Even", EvenBlogCard.isIntersecting)

            if (EvenBlogCard.isIntersecting) {
                setTimeout(function(){
                    EvenBlogCard.target.children[1].innerHTML = `<h1 class="Blog-Titles">Title</h1>
                    <p class="Blog-Text">Preview of the blog.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, impedit, dicta illum cumque aliquid nobis ab sed dignissimos repellat amet deserunt ratione inventore sapiente quasi deleniti eveniet tempore quibusdam adipisci repellendus, quaerat debitis tenetur expedita eius quisquam? Culpa, obcaecati quo.</p>
                    <a href="" class="Blog-Links">Read more!</a>`
                }, 200)
            } else {
                EvenBlogCard.target.children[1].innerHTML = ""
            }
            })
        },
        {
            rootMargin: "-230px",
        }
    )
    
    EvenBlogCards.forEach(EvenCard => {
        EvenObserver.observe(EvenCard)
    })

    const OddObserver = new IntersectionObserver(OddCards => {
        OddCards.forEach(OddBlogCard => {
            OddBlogCard.target.classList.toggle("Show-Blog-Text-Odd", OddBlogCard.isIntersecting)

            if (OddBlogCard.isIntersecting) {
                setTimeout(function(){
                    OddBlogCard.target.children[1].innerHTML = `<h1 class="Blog-Titles">Title</h1>
                    <p class="Blog-Text">Preview of the blog.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, impedit, dicta illum cumque aliquid nobis ab sed dignissimos repellat amet deserunt ratione inventore sapiente quasi deleniti eveniet tempore quibusdam adipisci repellendus, quaerat debitis tenetur expedita eius quisquam? Culpa, obcaecati quo.</p>
                    <a href="" class="Blog-Links">Read more!</a>`
                }, 200)
            } else {
                OddBlogCard.target.children[1].innerHTML = ""
            }
            })
        },
        {
            rootMargin: "-230px",
        }
    )
    
    OddBlogCards.forEach(OddCard => {
        OddObserver.observe(OddCard)
    })
}