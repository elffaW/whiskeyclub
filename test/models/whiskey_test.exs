defmodule Whiskeyclub.WhiskeyTest do
  use Whiskeyclub.ModelCase

  alias Whiskeyclub.Whiskey

  @valid_attrs %{age: "some content", name: "some content", proof: 42, type: "some content", wood: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Whiskey.changeset(%Whiskey{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Whiskey.changeset(%Whiskey{}, @invalid_attrs)
    refute changeset.valid?
  end
end
