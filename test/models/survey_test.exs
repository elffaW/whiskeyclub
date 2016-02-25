defmodule Whiskeyclub.SurveyTest do
  use Whiskeyclub.ModelCase

  alias Whiskeyclub.Survey

  @valid_attrs %{appearance: "some content", appearance_rating: 42, aroma: "some content", aroma_rating: 42, bottle_design: "some content", design_rating: 42, rec_taste: "some content", recommend: true, taste: "some content", taste_rating: 42, tasting_date: "2010-04-17 14:00:00"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Survey.changeset(%Survey{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Survey.changeset(%Survey{}, @invalid_attrs)
    refute changeset.valid?
  end
end
