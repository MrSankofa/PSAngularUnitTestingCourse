import { MessageService } from "./message.service";
describe("Message Service", () => {
  let service: MessageService;

  it("should have no messages to start", () => {
    // arrange && act because service.messages is initialized to [] on instantiation
    service = new MessageService();

    // assert
    expect(service.messages.length).toBe(0);
  });

  it("should add a message when add is called", () => {
    // arrange - sanitizing our test so that service is not affected by other tests
    service = new MessageService();
    // act
    service.add("message1");
    // assert
    expect(service.messages.length).toBe(1);
  });

  it("should remove all messages when clear is called", () => {
    // arrange - sanitizing our test so that service is not affected by other tests
    service = new MessageService();
    service.add("message1");
    service.add("message2");
    service.add("message3");

    // act
    service.clear();

    // assert
    expect(service.messages.length).toBe(0);
  });
});
