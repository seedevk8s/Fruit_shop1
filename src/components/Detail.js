import React from 'react';
import { useParams } from "react-router-dom";

function Detail(props) {
    let {paramId} = useParams();
    //const { id, imgUrl, title, content, price } = props.fruit[paramId];

    // props.fruit 배열에서 id가 paramId와 일치하는 상품을 찾아 item 변수에 저장
    // paramId는 문자열이므로 parseInt를 사용해 숫자로 변환
    let item = props.fruit.find(f => f.id === parseInt(paramId));

    const { imgUrl, title, content, price } = item;
    return (
       <div className="container">
            <div className="row">
                <div className="col-md-6">
                   <img src={'/' + imgUrl} width="100%" alt={title} />
                </div>
                <div className="col-md-6">
                    <h5 className="pt-5">{title}</h5>
                    <p>{content}</p>
                    <p>{price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;