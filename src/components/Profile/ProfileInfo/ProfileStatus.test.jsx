import React from "react";
import { create } from "react-test-renderer";
import Profile from "../Profile";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra.com");
  });

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);

    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);

    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra.com");
  });

  test("input should be displayed in editMode insted of span", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);

    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("it-kamasutra.com");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="it-kamasutra.com" updateState={mockCallback} />);
    let instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
