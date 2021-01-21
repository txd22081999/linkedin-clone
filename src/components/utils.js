const getTime = (timeStamp) => {
  if (!timeStamp) return '';

  const postDate = timeStamp.toDate();
  const now = new Date();
  const diff = now - postDate;
  const diffSec = diff / 1000;

  // Exception for firestore
  if (diffSec < 0) {
    return '0s';
  }

  if (diffSec < 60) {
    return Math.floor(diffSec) + 's';
  }

  const diffMin = diffSec / 60;
  if (diffMin < 60) {
    return Math.floor(diffMin) + 'm';
  }

  const diffHour = diffMin / 60;
  if (diffHour < 60) {
    return Math.floor(diffHour) + 'h';
  }

  const diffDay = diffHour / 24;
  if (diffDay < 24) {
    return Math.floor(diffDay) + 'd';
  }

  const diffWeek = diffDay / 7;
  if (diffWeek < 4) {
    return Math.floor(diffWeek) + 'w';
  }

  const diffMonth = diffWeek / 4;
  if (diffMonth < 12) {
    return Math.floor(diffMonth) + 'mo';
  }

  const diffYear = diffMonth / 12;
  return Math.floor(diffYear) + 'y';

  //   if (diffSec > 60) {
  //     const diffMin = diffSec / 60;

  //     if (diffMin > 60) {
  //       const diffHour = diffMin / 60;

  //       if (diffHour > 24) {
  //         const diffDay = diffHour / 24;

  //         if (diffDay > 7) {
  //           const diffWeek = diffDay / 7;

  //           if (diffWeek > 4) {
  //             const diffMonth = diffWeek / 4;

  //             if (diffMonth > 12) {
  //               const diffYear = diffMonth / 12;

  //               return Math.floor(diffYear) + 'y';
  //             }
  //             return Math.floor(diffMonth) + 'mo';
  //           }
  //           return Math.floor(diffWeek) + 'w';
  //         }
  //         return Math.floor(diffDay) + 'd';
  //       }
  //       return Math.floor(diffHour) + 'h';
  //     }
  //     return Math.floor(diffMin) + 'm';
  //   }
  //   return Math.floor(diffSec) + 's';
};

export { getTime };
