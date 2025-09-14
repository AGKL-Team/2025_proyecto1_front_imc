import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ImcForm from "../components/ImcForm";

vi.mock("../hooks/useCalculateImc", () => {
  const calculateImc = vi.fn();
  return {
    useCalculateImc: () => ({
      calculateImc,
      isPending: false,
      imcResponse: {
        imc: 24.4897,
        category: {
          name: "Normal",
        },
      },
    }),
  };
});

describe("ImcForm", () => {
  it("renders form fields and result", () => {
    render(<ImcForm />);
    expect(screen.getByLabelText(/Altura/i)).toBeInTheDocument();
    expect(screen.getByText(/IMC:/i)).toHaveTextContent("IMC: 24.49");
  });

  it("should sent data and show result", async () => {
    const user = userEvent.setup();
    render(<ImcForm />);
    await user.clear(screen.getByLabelText(/Altura/i));
    await user.type(screen.getByLabelText(/Altura/i), "1.70");
    await user.clear(screen.getByLabelText(/Peso/i));
    await user.type(screen.getByLabelText(/Peso/i), "70");
    await user.click(screen.getByRole("button", { name: /Calcular/i }));

    expect(screen.getByLabelText(/Altura/i)).toHaveValue(1.7);
    expect(screen.getByLabelText(/Peso/i)).toHaveValue(70);
    expect(screen.getByText(/IMC:/i)).toHaveTextContent("IMC: 24.49");
  });
});
