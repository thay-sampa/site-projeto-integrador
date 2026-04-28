const intro = document.querySelector(".intro")
const tecno = document.querySelector(".tecno")
const mulher = document.querySelector(".mulher")
const nanotec = document.querySelector(".nanotec")
const conclusao = document.querySelector(".conclusao")
const fontes = document.querySelector(".fontes")
const secoes = document.querySelectorAll("section")

const camera = new IntersectionObserver((secoes) => {
    secoes.forEach(secao => {
        if (secao.isIntersecting) secao.target.classList.add("visivel")
    })
})

secoes.forEach(secao => camera.observe(secao))

const pageAccess = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return

        [intro, tecno, mulher, nanotec, conclusao, fontes].forEach(item => {
            item?.classList.remove("ativo")
        })

        const id = entrada.target.id
        if (id === "introducao") intro?.classList.add("ativo")
        else if (id === "tecnologia") tecno?.classList.add("ativo")
        else if (id === "mulheres") mulher?.classList.add("ativo")
        else if (id === "nanotecnologia") nanotec?.classList.add("ativo")
        else if (id === "conclusao") conclusao?.classList.add("ativo")
        else if (id === "fontes") fontes?.classList.add("ativo")
    })

}, {
    threshold: 0.1
})

secoes.forEach(secao => pageAccess.observe(secao))

const cbcItens = document.querySelectorAll(".cbc-item")

cbcItens.forEach(item => {
    item.addEventListener("mousedown", () => item.classList.add("pressionado"))
    item.addEventListener("mouseup", () => item.classList.remove("pressionado"))
})

