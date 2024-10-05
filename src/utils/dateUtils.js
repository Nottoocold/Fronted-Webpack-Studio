import { isDate } from "lodash";

export function formatDate(date) {
  if (!isDate(date)) {
    return "";
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatDateTime(date) {
  if (!isDate(date)) {
    return "";
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

export function formatYearMonth(date) {
  if (!isDate(date)) {
    return "";
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${year}-${month}`;
}

export function formatMonthDay(date) {
  if (!isDate(date)) {
    return "";
  }
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}-${day}`;
}

export function formatDateWithRelativeTime(date) {
  if (!isDate(date)) {
    return "";
  }
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  if (diff < 0) {
    return "";
  }

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    // 1分钟内
    return "刚刚";
  } else if (seconds < 60 * 60) {
    // 1小时内
    return `${Math.floor(seconds / 60)}分钟前`;
  } else if (seconds < 60 * 60 * 24) {
    // 1天内
    return `${Math.floor(minutes / 60)}小时前`;
  } else if (days < 30) {
    // 1个月内
    return `${days}天前`;
  } else if (days < 365) {
    // 1年内
    return `${Math.floor(days / 30)}个月前`;
  } else {
    // 1年以上
    return formatDateTime(date);
  }
}

export function parseDate(dateStr) {
  if (!dateStr) {
    return null;
  }
  const dateArr = dateStr.split("-");
  if (dateArr.length === 3) {
    const year = parseInt(dateArr[0]);
    const month = parseInt(dateArr[1]) - 1;
    const day = parseInt(dateArr[2]);
    return new Date(year, month, day);
  } else {
    return null;
  }
}

export function parseDateTime(dateTimeStr) {
  if (!dateTimeStr) {
    return null;
  }
  const dateTimeArr = dateTimeStr.split(" ");
  if (dateTimeArr.length === 2) {
    const dateArr = dateTimeArr[0].split("-");
    if (dateArr.length === 3) {
      const year = parseInt(dateArr[0]);
      const month = parseInt(dateArr[1]) - 1;
      const day = parseInt(dateArr[2]);
      const timeArr = dateTimeArr[1].split(":");
      if (timeArr.length === 3) {
        const hour = parseInt(timeArr[0]);
        const minute = parseInt(timeArr[1]);
        const second = parseInt(timeArr[2]);
        return new Date(year, month, day, hour, minute, second);
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
}

