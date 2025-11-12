      const img1 = document.getElementById("img1");
      const img2 = document.getElementById("img2");
      const body = document.body;
      let front = img2;

      function bringToFront(clicked) {
        if (clicked === front) return;

        front.classList.remove("relative", "-rotate-2", "z-10", "opacity-100");
        front.classList.add(
          "absolute",
          "top-8",
          "rotate-3",
          "z-0",
          "opacity-70"
        );

        clicked.classList.remove(
          "absolute",
          "top-8",
          "rotate-3",
          "z-0",
          "opacity-70"
        );
        clicked.classList.add("relative", "-rotate-2", "z-10", "opacity-100");

        if (clicked.id === "img1") {
          body.style.background =
            "radial-gradient(circle at center, #4A70A9, #000)";
          body.classList.add("periodic-bg");
        } else {
          body.style.background =
            "radial-gradient(circle at center, #1a0b2e, #000)";
          body.classList.remove("periodic-bg");
        }

        front = clicked;
      }

      img1.addEventListener("click", () => bringToFront(img1));
      img2.addEventListener("click", () => bringToFront(img2));