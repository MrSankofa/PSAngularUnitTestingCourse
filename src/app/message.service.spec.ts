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
    // act
    service.add("message1");
    // assert
    expect(service.messages.length).toBe(1);
  });
});
