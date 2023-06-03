const BlogCards = document.querySelectorAll(".Blog-Preview-Text")

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    BlogCards.forEach(Card => {
        Card.classList.add("Show-Blog-Text")
    })
} else {
    const Observer = new IntersectionObserver(Cards => {
        Cards.forEach(BlogCard => {
            BlogCard.target.classList.toggle("Show-Blog-Text", BlogCard.isIntersecting)
            console.log(BlogCard.target)
            })
        },
        {
            rootMargin: "-230px",
        }
    )
    
    BlogCards.forEach(Card => {
        Observer.observe(Card)
    })
}