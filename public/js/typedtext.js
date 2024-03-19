try {
  // set up text to print, each item in array is new line
  var aText = new Array(
    "NexBridge is a digital asset issuer, forging a link between traditional finance and digital assets. We empower",
    "investors with access to a new spectrum of tokenized investment opportunities, while enabling asset owners",
    "to penetrate global liquid capital markets."
  );
  var iSpeed = 20;
  var iIndex = 0;
  var iArrLength = aText[0].length;
  var iScrollAt = 20;

  var iTextPos = 0;
  var sContents = "";
  var iRow;

  function typewriter() {
    sContents = " ";
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
      sContents += aText[iRow++] + "<br />";
    }

    destination.innerHTML =
      sContents +
      aText[iIndex].substring(0, iTextPos) +
      (iIndex + 1 != aText.length ? " |" : "");
    if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex != aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout("typewriter()", 500);
      } else {
        destination.innerText = aText.join("");
      }
    } else {
      setTimeout("typewriter()", iSpeed);
    }
  }

  let isTypedAnimationPlayed = false;
  const typedTextObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isTypedAnimationPlayed) {
          typewriter();
          isTypedAnimationPlayed = true;
        }
      });
    },
    {
      rootMargin: "0px 0px -20% 0px",
    }
  );

  typedTextObserver.observe(document.getElementById("typedtext"));
} catch (e) {}
