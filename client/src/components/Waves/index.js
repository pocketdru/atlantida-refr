import React , { Component } from "react";
import "./style.css";

class WavySvg extends Component {
    componentDidMount () {
        this.bigAnimate()
    }

    bigAnimate = () => {
       let xs = [];
        for (var i=0; i <= 500; i++) {
            xs.push(i)
        }

        function animate () {
            let xs = [];
    
            for (var i=0; i <= 500; i++) {
                xs.push(i)
            }
    
            let points = xs.map(x => {
    
                return [x, x]
            })
    
            let path = "M" + points.map(p => {
                return p[0] + "," + p[1]
            }).join(" L")
            console.log("it works")
            requestAnimationFrame(animate)

        }
        animate()
    }

    render() {

        return(
            <div>
                <svg>
                    <path d=""></path>
                </svg>
            </div>
        )
    }
}

export default WavySvg;