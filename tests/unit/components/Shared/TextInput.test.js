import { render, screen, fireEvent } from "@testing-library/vue";
import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
  it("renders with the correct initial value", () => {
    const initialText = "initial value";
    render(TextInput, {
      props: {
        modelValue: initialText,
      },
    });

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue(initialText);
  });

  it("emits an 'update:modelValue' event when the input value changes", async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: "initial value",
      },
    });

    const input = screen.getByRole("textbox");
    await fireEvent.input(input, { target: { value: "new value" } });

    expect(emitted("update:modelValue")).toBeTruthy();
    expect(emitted("update:modelValue")[0]).toEqual(["new value"]);
  });
});
