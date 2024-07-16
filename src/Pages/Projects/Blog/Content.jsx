

export default function Content({contentDescription, contentTitle}){

    return(
        <div class="container__content">
            <div class="content_cover">
                <img src="{{photoCover}}" alt="imagem"/>
            </div>
            <a href="blog"> VOLTAR </a>
            <div class="content_title">
                <h1>{{contentTitle}}</h1>
                <hr/>
            </div>
            <div class="content_description">
                <p>{{contentDescription}}</p>
            </div>
        </div>
    );
}
