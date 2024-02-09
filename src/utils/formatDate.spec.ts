import { formatDate } from "./formatDate";

describe("{formatDate}", () => {
  describe("when locale in en-US", () => {
    beforeEach(() => {
      // tell vitest we use mocked time
      vi.useFakeTimers();
    });

    afterEach(() => {
      // restoring date after each test run
      vi.useRealTimers();
    });

    it("formats the date to english", () => {
      const mockDate = new Date(2000, 1, 1, 13);
      vi.setSystemTime(mockDate);

      const result = formatDate(mockDate, "en-US");

      expect(result).toBe("Feb 1, 2000");
    });
  });

  describe("when locale in pt-BR", () => {
    beforeEach(() => {
      // tell vitest we use mocked time
      vi.useFakeTimers();
    });

    afterEach(() => {
      // restoring date after each test run
      vi.useRealTimers();
    });

    it("formats the date to portuguese", () => {
      const mockDate = new Date(2000, 1, 1, 13);
      vi.setSystemTime(mockDate);

      const result = formatDate(mockDate, "pt-BR");

      expect(result).toBe("1 de fev. de 2000");
    });
  });
});
