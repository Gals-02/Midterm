import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";

function Particle(){

    const particlesInit = async (main) => {
        console.log(main);

        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };


    return (
        <div className="particle-background">
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            "name": "Among Us",
            "particles": {
                "groups": {
                    "z5000": {
                        "number": {
                            "value": 70
                        },
                        "zIndex": {
                            "value": 50
                        }
                    },
                    "z7500": {
                        "number": {
                            "value": 30
                        },
                        "zIndex": {
                            "value": 75
                        }
                    },
                    "z2500": {
                        "number": {
                            "value": 50
                        },
                        "zIndex": {
                            "value": 25
                        }
                    },
                    "z1000": {
                        "number": {
                            "value": 40
                        },
                        "zIndex": {
                            "value": 10
                        }
                    }
                },
                "number": {
                    "value": 200
                },
                "color": {
                    "value": "#fff",
                    "animation": {
                        "enable": false,
                        "speed": 20,
                        "sync": true
                    }
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 1
                },
                "size": {
                    "value": 3
                },
                "move": {
                    "angle": {
                        "value": 10,
                        "offset": 0
                    },
                    "enable": true,
                    "speed": 5,
                    "direction": "right",
                    "random": false,
                    "straight": false
                },
                "zIndex": {
                    "value": 5,
                    "opacityRate": 0.5
                }
            },
            "background": {
                "color": "#000000"
            },
            "emitters": {
                "position": {
                    "y": 55,
                    "x": -5
                },
                "rate": {
                    "delay": 7,
                    "quantity": 1
                },
                "size": {
                    "width": 0,
                    "height": 0
                },
                "particles": {
                    "shape": {
                        "type": "images",
                        "options": {
                            "images": {
                                "src": "https://particles.js.org/images/cyan_amongus.png",
                                "width": 500,
                                "height": 634
                            }
                        }
                    },
                    "size": {
                        "value": 40
                    },
                    "move": {
                        "speed": 10,
                        "outModes": {
                            "default": "none",
                            "right": "destroy"
                        },
                        "straight": true
                    },
                    "zIndex": {
                        "value": 0
                    },
                    "rotate": {
                        "value": {
                            "min": 0,
                            "max": 360
                        },
                        "animation": {
                            "enable": true,
                            "speed": 10,
                            "sync": true
                        }
                    }
                }
            }
        }}
    />
    </div>
    )
}

export default Particle;