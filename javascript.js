const targetDate = new Date(Date.UTC(2024, 0, 31, 0, 0, 0));

function updateCountdown() {
  const currentDate = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Oslo" })
  );
  const timeDifference = targetDate - currentDate;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    document.getElementById("countdown").innerHTML = "Countdown expired!";
  }
}

setInterval(updateCountdown, 1000);

updateCountdown();
