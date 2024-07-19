
const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");
  

    const frameCount = 297;
    const currentFrame = index => (
      `./images/frame (${index}).jpg`
    )
    

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image()
    img.src = currentFrame(1);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    img.onload = function () {
      context.drawImage(img, 0, 0, canvas.width, canvas.height)
    }

    const updateImage = index => {

      img.src = currentFrame(index);
      context.drawImage(img, 0, 0, canvas.width, canvas.height)
    }

    window.addEventListener('scroll', () => {
      const scrollTop = document.body.scrollTop;
      const maxScrollTop = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );
      console.log(frameIndex)


      if (frameIndex > 240) {
          document.querySelector(".overlay").style.opacity = "0.6"
          document.querySelector("#herotext").style.opacity = "1"
          document.querySelector("#herotext").innerText = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      } else if (frameIndex > 192) {
          document.querySelector(".overlay").style.opacity = "0"
          document.querySelector("#herotext").style.opacity = "0"
      } else if (frameIndex > 155) {
          document.querySelector(".overlay").style.opacity = "0.6"
          document.querySelector("#herotext").style.opacity = "1"
          document.querySelector("#herotext").innerText = "Lorem incididunt ea sint mollit aliqua sunt velit non voluptate."
      } else if (frameIndex > 112) {
          document.querySelector(".overlay").style.opacity = "0"
          document.querySelector("#herotext").style.opacity = "0"
      } else if (frameIndex > 62) {
          document.querySelector(".overlay").style.opacity = "0.6"
          document.querySelector("#herotext").style.opacity = "1"
          document.querySelector("#herotext").innerText = "Dolor ex ullamco pariatur aute dolor fugiat."
      } else {
          document.querySelector(".overlay").style.opacity = "0"
          document.querySelector("#herotext").style.opacity = "0"
      }

      if (frameIndex == 296) {
        console.log("fired");
        document.querySelector(".overlay").style.position = "absolute"
        document.querySelector("canvas").style.position = "absolute"
        document.querySelector(".overlay").style.top = window.pageYOffset + "px"
        document.querySelector("canvas").style.top = window.pageYOffset + "px"
        document.querySelector("#herotext").style.font="30px Sans-serif, Lato"
        document.querySelector("#herotext").style.color="red"
        document.querySelector("#herotext").innerText="Follow Maybe?"
        
      } else {
        console.log("unfired");
        document.querySelector(".overlay").style.position = "fixed"
        document.querySelector("canvas").style.position = "fixed"
        document.querySelector(".overlay").style.top = "0"
        document.querySelector("canvas").style.top = "0"
        document.querySelector("#herotext").style.font="40px 'Redacted Script'"
        document.querySelector("#herotext").style.color="white"
      }

     



      requestAnimationFrame(() => updateImage(frameIndex + 1))
    });

    preloadImages()
