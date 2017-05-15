/**
 * Created by orel- on 15/May/17.
 */
// async/await error catcher
const catchAsyncErrors = fn => (
  (req, res, next) => {
    const routePromise = fn(req, res, next);
    if (routePromise.catch) {
      routePromise.catch(err => next(err));
    }
  }
);

exports.catchAsync = catchAsyncErrors;
