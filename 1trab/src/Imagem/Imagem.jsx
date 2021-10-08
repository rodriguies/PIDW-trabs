import React, { Component} from "react";
import { Image } from 'react-native'
export default class Imagem extends Component{
    render(){
        let img = {uri:'https://avatars.githubusercontent.com/u/38023813?v=4'}

        return(
            <Image
                source={img}
                style={ {resizeMode: "center", width:200, height:200} }
            />
        )
    }
}