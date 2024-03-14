import dayjs from 'dayjs';

export function getRemainingTime(timeMs) {
    const timeDayjs = dayjs(timeMs);
    const nowDayjs = dayjs();
    const timeDiffMs = timeDayjs.diff(nowDayjs);

    const days = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiffMs % (1000 * 60)) / 1000);

    return {
        seconds: seconds < 10 ? seconds.toString().padStart(2, '0') : seconds.toString(),
        minutes: minutes < 10 ? minutes.toString().padStart(2, '0') : minutes.toString(),
        hours: hours < 10 ? hours.toString().padStart(2, '0') : hours.toString(),
        days: days
    }
}