type ErrorCode = "API" | "UI" | "PRE_API";

const codeToMessage: Record<ErrorCode, string> = {
  API: "요청이 실패했어요",
  UI: "UI를 불러로는 데에 실패했어요",
  PRE_API: "요청 준비에 실패했어요",
};

class CustomError extends Error {
  error: any;
  constructor(code: ErrorCode, error?: any) {
    super(codeToMessage[code]);
    this.name = code;
    this.error = error;
  }
}

export default CustomError;

