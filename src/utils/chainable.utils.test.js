import { chain } from "./chainable.utils";
import { waitFor } from "./async.utils";

describe('chain', () => {
  it('should chain move', () => {
    let initialPos = 1;

    chain()
      .step(() => initialPos++)
      .step(() => initialPos++)
      .stop();
    
    expect(initialPos).toBe(3);
  });

  it('should chain move and delay', () => {
    let initialPos = 1;

    chain()
      .step(() => initialPos++)
      .cancel(500, () => initialPos++);

    expect(initialPos).toBe(2);

    waitFor(600).then(() => {
      expect(initialPos).toB3(1);
    });
  });
})

