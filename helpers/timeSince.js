let timeSince = (date) => {
    let seconds = Math.floor((Date.now() - date) / 1000);

    let interval = seconds / 31536000; // years

    let n;

    if (interval > 1) {
          n = Math.floor(interval);
          return `${n} year${n - 1 ? "s" : ""}`;
    }

    interval = seconds / 2592000; // months
    if (interval > 1) {
          n = Math.floor(interval);
          return `${n} month${n - 1 ? "s" : ""}`;
    }

    interval = seconds / 86400; // days
    if (interval > 1) {
          n = Math.floor(interval);
          return `${n} day${n - 1 ? "s" : ""}`;
    }

    interval = seconds / 3600; // hours
    if (interval > 1) {
          n = Math.floor(interval);
          return `${n} hour${n - 1 ? "s" : ""}`;
    }

    interval = seconds / 60; // minutes
    if (interval > 1) {
          n = Math.floor(interval);
          return `${n} minute${n - 1 ? "s" : ""}`;
    }

    n = Math.floor(seconds);
    return `${n} second${n - 1 ? "s" : ""}`;
};