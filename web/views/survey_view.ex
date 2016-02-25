defmodule Whiskeyclub.SurveyView do
  use Whiskeyclub.Web, :view

  def render("index.json", %{surveys: surveys}) do
    %{data: render_many(surveys, Whiskeyclub.SurveyView, "survey.json")}
  end

  def render("show.json", %{survey: survey}) do
    %{data: render_one(survey, Whiskeyclub.SurveyView, "survey.json")}
  end

  def render("survey.json", %{survey: survey}) do
    %{id: survey.id,
      user_id: survey.user_id,
      whiskey_id: survey.whiskey_id,
      appearance: survey.appearance,
      appearance_rating: survey.appearance_rating,
      aroma: survey.aroma,
      aroma_rating: survey.aroma_rating,
      taste: survey.taste,
      taste_rating: survey.taste_rating,
      recommend: survey.recommend,
      rec_taste: survey.rec_taste,
      bottle_design: survey.bottle_design,
      design_rating: survey.design_rating,
      tasting_date: survey.tasting_date}
  end
end
