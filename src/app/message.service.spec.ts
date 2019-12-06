import { MessageService } from "./message.service";
describe("Message Service", () => {
  let service: MessageService;

  // slight violation of our 'tell a story rule' that the array is pulled out of the it test
  beforeEach(() => {
    // arrange
    service = new MessageService();
  });

  it("should have no messages to start", () => {
    // assert
    expect(service.messages.length).toBe(0);
  });

  it("should add a message when add is called", () => {
    // act
    service.add("message1");
    // assert
    expect(service.messages.length).toBe(1);
  });
});
