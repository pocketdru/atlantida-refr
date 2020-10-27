import React , { Component } from "react";
import "./style.css";

class WavySvg extends Component {

    componentDidMount() {
        this.bigAnimate()
    }

    constructor(props) {
        super(props)
        this.bigAnimate = this.bigAnimate.bind(this);
        this.state = {
            path: "M10,10 L50,100 L90,50"
        };
      }

    bigAnimate = () => {

        let t = 0;

         this.animate = () => {
            let xs = [];
    
            for (var i=0; i <= 700; i++) {
                xs.push(i)
            }
    
            let points = xs.map(x => {

                let y = 5 + 2 * Math.sin((x + t)/2)
    
                return [x, y]
            })
    
            let newPath = "M" + points.map(p => {
                return p[0] + "," + p[1]
            }).join(" L")

            this.setState({
                path: newPath
            })

            t += 1;

            requestAnimationFrame(this.animate)

            return newPath;


        }

        this.animate()
    }



    render() {
        return(
            <div>
                <svg>
                    <path d={this.state.path}></path>
                </svg>
            </div>
        )
    }
}

export default WavySvg;