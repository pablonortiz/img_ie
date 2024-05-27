/**
 * @description rejects a promise with the reason that has been passed
 * @param {object} reason the reason for the promise to be rejected
 */
const rejectWithReason = (reason: Error) => {
  if (!reason) return null;

  return Promise.reject(reason.message);
};

export default rejectWithReason;
