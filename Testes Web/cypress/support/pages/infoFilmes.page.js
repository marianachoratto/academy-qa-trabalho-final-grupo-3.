export default class MoviePage {
    tituloFilme = '.movie-details-title'
    avaliacaoAudiencia = '.movie-score-info > :nth-child(1)'
    avaliacaoCritica = '.movie-score-info > :nth-child(2)'
    descricaoFilme = '.movie-detail-description'
    anoFilme = ':nth-child(4) > span'
    duracaoFilme = ':nth-child(5) > span'
    generoFilme = ':nth-child(6) > span'
    capaFilme = '.w-full'
    tituloNovaAvaliacao = '.movie-details-container > :nth-child(2)'
    novaAvaliacao = '.stars'
    textoNovaAvaliacao = 'textarea'
    botaoEnviarAvaliacao = '.rate-movie > button'
    botaoLoginAvaliacao = '.rate-movie > a'
    tituloAvaliacoes = '.user-reviews-section > h2'
    sessaoAvaliacoes = '.user-reviews-section'
    nomeUsuario1 = ':nth-child(1) > .user-review-info > .user-reviecard-info > h3'
    nomeUsuario2 = ':nth-child(2) > .user-review-info > .user-reviecard-info > h3'
    nomeUsuario3 = ':nth-child(3) > .user-review-info > .user-reviecard-info > h3'
    dataUsuario1 = '.user-reviews-container > :nth-child(1) > label'
    dataUsuario2 = '.user-reviews-container > :nth-child(2) > label'
    dataUsuario3 = '.user-reviews-container > :nth-child(3) > label'
    avaliacaoUsuario1 = ':nth-child(1) > p'
    avaliacaoUsuario2 = '.user-reviews-container > :nth-child(2) > p'
    avaliacaoUsuario3 = ':nth-child(3) > p'
    notaUsuario1 = ':nth-child(2) > [data-layer="Margin"]'
    notaUsuario2 = ':nth-child(2) > .user-review-info > .user-reviecard-info > .star-container-reviewcard'
    notaUsuario3 = ':nth-child(3) > .user-review-info > .user-reviecard-info > .star-container-reviewcard'


}