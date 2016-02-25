defmodule Whiskeyclub.SurveyControllerTest do
  use Whiskeyclub.ConnCase

  alias Whiskeyclub.Survey
  @valid_attrs %{appearance: "some content", appearance_rating: 42, aroma: "some content", aroma_rating: 42, bottle_design: "some content", design_rating: 42, rec_taste: "some content", recommend: true, taste: "some content", taste_rating: 42, tasting_date: "2010-04-17 14:00:00"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, survey_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    survey = Repo.insert! %Survey{}
    conn = get conn, survey_path(conn, :show, survey)
    assert json_response(conn, 200)["data"] == %{"id" => survey.id,
      "user_id" => survey.user_id,
      "whiskey_id" => survey.whiskey_id,
      "appearance" => survey.appearance,
      "appearance_rating" => survey.appearance_rating,
      "aroma" => survey.aroma,
      "aroma_rating" => survey.aroma_rating,
      "taste" => survey.taste,
      "taste_rating" => survey.taste_rating,
      "recommend" => survey.recommend,
      "rec_taste" => survey.rec_taste,
      "bottle_design" => survey.bottle_design,
      "design_rating" => survey.design_rating,
      "tasting_date" => survey.tasting_date}
  end

  test "does not show resource and instead throw error when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, survey_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, survey_path(conn, :create), survey: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Survey, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, survey_path(conn, :create), survey: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    survey = Repo.insert! %Survey{}
    conn = put conn, survey_path(conn, :update, survey), survey: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Survey, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    survey = Repo.insert! %Survey{}
    conn = put conn, survey_path(conn, :update, survey), survey: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    survey = Repo.insert! %Survey{}
    conn = delete conn, survey_path(conn, :delete, survey)
    assert response(conn, 204)
    refute Repo.get(Survey, survey.id)
  end
end
