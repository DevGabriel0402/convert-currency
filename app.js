const localeFrom =
  document.getElementById("localeFrom");
const localeTo =
  document.getElementById("localeTo");

const iconFrom =
  document.getElementById("icon-from");
const IconTo = document.getElementById("icon-to");

function modifyIconFrom(locale) {
  if (locale === "BRL") {
    iconFrom.src = "/assets/br-image.png";
    const inputValueFrom =
      document.getElementById("inputFrom");
    const valorInput = inputValueFrom.value;

    console.log(valorInput);
  } else if (locale === "USD") {
    iconFrom.src = "/assets/usd-image.png";
  } else if (locale === "EUR") {
    iconFrom.src = "/assets/euro-image.png";
  }
}

function modifyIconTo(locale) {
  if (locale === "USD") {
    IconTo.src = "/assets/usd-image.png";
  } else if (locale === "BRL") {
    IconTo.src = "/assets/br-image.png";
  } else if (locale === "EUR") {
    IconTo.src = "/assets/euro-image.png";
  }
}

function converterMoeda() {
  const amount =
    document.getElementById("amount").value;
  const from =
    document.getElementById("localeFrom").value;
  const to =
    document.getElementById("localeTo").value;

  fetch(
    `https://api.exchangerate-api.com/v4/latest/${from}`
  )
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data.rates[to];
      const result = (
        amount * exchangeRate
      ).toFixed(2);

      document.getElementById(
        "result"
      ).innerHTML = `${result}`.replace(".", ",");
    })
    .catch((error) => {
      console.error(
        "Erro ao obter taxa de câmbio:",
        error
      );
    });
}
