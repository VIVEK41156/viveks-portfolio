import { Analytics } from "@vercel/analytics/react"

import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { StrictMode, Suspense } from 'react'

import Loader from './Components/Loader.jsx'
import App from './App.jsx'
import './index.css'

console.log("Hi if you notice a bug please contact me max2002guillon@gmail.com")


const isMobile = () => {
    return ( ( window.innerWidth <= 1000 ) && ( window.innerHeight <= 800 ) );
  }

const root = ReactDOM.createRoot(document.querySelector('#root'))

const fovForMobile = 100
const fovForPc = 45

root.render(
    <StrictMode>
        <Canvas
            camera={{
            fov: isMobile() ? fovForMobile : fovForPc,
            near: 0.1,
            far: 200,
            position: [52, 7, 12],
        }}
        >
            <Suspense fallback={<Loader/>}>
                <App/>   
            </Suspense>

            {/*<Perf position="top-left" />*/}
        </Canvas>

        <Analytics/>
     <div style={{ 
  display: "flex", 
  flexDirection: "column",
  gap: "2rem",
  padding: "3rem 2rem",
  maxWidth: "1200px",
  margin: "0 auto",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  minHeight: "100vh",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
}}>
  <section aria-hidden="true" style={{
    background: "rgba(255, 255, 255, 0.95)",
    padding: "2.5rem",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
    transform: "translateY(0)",
    transition: "transform 0.3s ease"
  }}>
    <h1 style={{
      fontSize: "3rem",
      fontWeight: "800",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "1rem",
      letterSpacing: "-0.5px"
    }}>Vivek Parri - Creative Developer</h1>
    <h2 style={{
      fontSize: "1.25rem",
      color: "#4a5568",
      fontWeight: "500",
      marginBottom: "0.5rem"
    }}>Computer Science Student at Narayana Engineering College Nellore</h2>
    <h2 style={{
      fontSize: "1.25rem",
      color: "#667eea",
      fontWeight: "600",
      marginBottom: "0.5rem"
    }}>Three.js and React Three Fiber Expert</h2>
    <h2 style={{
      fontSize: "1.25rem",
      color: "#764ba2",
      fontWeight: "600"
    }}>Specialized in 3D Web Development</h2>
  </section>

  <section aria-hidden="true" style={{
    background: "rgba(255, 255, 255, 0.95)",
    padding: "2.5rem",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)"
  }}>
    <h2 style={{
      fontSize: "2rem",
      fontWeight: "700",
      color: "#2d3748",
      marginBottom: "1.5rem",
      borderBottom: "3px solid #667eea",
      paddingBottom: "0.5rem",
      display: "inline-block"
    }}>Skills and Expertise</h2>
    <ul style={{
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1rem"
    }}>
      <li style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "1rem 1.5rem",
        borderRadius: "12px",
        fontWeight: "600",
        fontSize: "1.1rem",
        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease"
      }}>Three.js Developer</li>
      <li style={{
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        color: "white",
        padding: "1rem 1.5rem",
        borderRadius: "12px",
        fontWeight: "600",
        fontSize: "1.1rem",
        boxShadow: "0 4px 15px rgba(240, 147, 251, 0.4)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease"
      }}>React Three Fiber Developer</li>
      <li style={{
        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        color: "white",
        padding: "1rem 1.5rem",
        borderRadius: "12px",
        fontWeight: "600",
        fontSize: "1.1rem",
        boxShadow: "0 4px 15px rgba(79, 172, 254, 0.4)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease"
      }}>GSAP Developer</li>
      <li style={{
        background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        color: "white",
        padding: "1rem 1.5rem",
        borderRadius: "12px",
        fontWeight: "600",
        fontSize: "1.1rem",
        boxShadow: "0 4px 15px rgba(67, 233, 123, 0.4)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease"
      }}>3D Web Experiences</li>
      <li style={{
        background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        color: "white",
        padding: "1rem 1.5rem",
        borderRadius: "12px",
        fontWeight: "600",
        fontSize: "1.1rem",
        boxShadow: "0 4px 15px rgba(250, 112, 154, 0.4)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease"
      }}>Creative Coding</li>
    </ul>
  </section>

  <section aria-hidden="true" style={{
    background: "rgba(255, 255, 255, 0.95)",
    padding: "2.5rem",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)"
  }}>
    <p style={{
      fontSize: "1.2rem",
      lineHeight: "1.8",
      color: "#2d3748",
      margin: 0,
      textAlign: "justify"
    }}>
      Welcome to the 3D portfolio of <span style={{
        fontWeight: "700",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>Vivek parri</span>. This immersive portfolio has 
      been created using <span style={{ fontWeight: "600", color: "#667eea" }}>React Three Fiber</span> and <span style={{ fontWeight: "600", color: "#764ba2" }}>GSAP</span>, with custom 3D models designed 
      in <span style={{ fontWeight: "600", color: "#f5576c" }}>Blender</span>. Explore innovative web experiences that blend creativity and technology.
    </p>
  </section>

  <noscript>
    <div style={{
      background: "#fff3cd",
      border: "2px solid #ffc107",
      padding: "1.5rem",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(255, 193, 7, 0.3)"
    }}>
      <p style={{
        color: "#856404",
        fontSize: "1.1rem",
        margin: 0,
        fontWeight: "500"
      }}>
        This 3D portfolio of Vivek's showcases creative web development using 
        React Three Fiber, Three.js, and GSAP. Please enable JavaScript to explore 
        the immersive experience.
      </p>
    </div>
  </noscript>
</div>



    </StrictMode>

        
    
)