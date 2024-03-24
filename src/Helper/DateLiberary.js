class DateLiberary {
  displayDate = (date) => {
    // return date in 12th January 2021 format
    if (!date) return "";
    const d = new Date(date);
    const month = d.toLocaleString("default", { month: "long" });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${day}th ${month} ${year}`;
  };
  displayTime = (date) => {
    if (!date) return "";
    // return time in 12:00 AM format
    const d = new Date(date);
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = (hours % 12 || 12).toString().padStart(2, "0"); // Add leading zero if necessary
    const formattedMinutes = minutes.toString().padStart(2, "0"); // Add leading zero if necessary
    return `${formattedHours}:${formattedMinutes} ${ampm}`.toUpperCase(); // Convert to uppercase
  };
  displayDateTime = (date) => {
    if (!date) return "";
    // return date and time in 12th January 2021 12:00 AM format
    return `${this.displayDate(date)} ${this.displayTime(date)}`;
  };
}

export default new DateLiberary();
