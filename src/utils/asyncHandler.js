
// Making a Higher Order Function
// A higher-order function is a function that takes another function as an argument, or returns a function.

const asyncHandler =(fn)=>{async (req, res, next)=>{
    try {
        await fn(req, res, next);
    } catch (error) {
        res.send(error.code || 500).json({
            message: error.message,
            success: false,
        });
    }
}};

export default asyncHandler;