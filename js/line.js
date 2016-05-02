const _line = (stackDepth = 0) => {
    const error = {},
        prepareStackTrace = Error.prepareStackTrace;

    Error.captureStackTrace(error, _line);

    {
        Error.prepareStackTrace = (errorObject, structuredStackTrace) => structuredStackTrace[stackDepth].getLineNumber();

        const stack = error.stack;

        Error.prepareStackTrace = prepareStackTrace;

        return stack;
    }
};

export default _line;
