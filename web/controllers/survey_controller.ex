defmodule Whiskeyclub.SurveyController do
  use Whiskeyclub.Web, :controller

  alias Whiskeyclub.Survey

  plug :scrub_params, "survey" when action in [:create, :update]

  def index(conn, _params) do
    surveys = Repo.all(Survey)
    render(conn, "index.json", surveys: surveys)
  end

  def create(conn, %{"survey" => survey_params}) do
    changeset = Survey.changeset(%Survey{}, survey_params)

    case Repo.insert(changeset) do
      {:ok, survey} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", survey_path(conn, :show, survey))
        |> render("show.json", survey: survey)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Whiskeyclub.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    survey = Repo.get!(Survey, id)
    render(conn, "show.json", survey: survey)
  end

  def update(conn, %{"id" => id, "survey" => survey_params}) do
    survey = Repo.get!(Survey, id)
    changeset = Survey.changeset(survey, survey_params)

    case Repo.update(changeset) do
      {:ok, survey} ->
        render(conn, "show.json", survey: survey)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Whiskeyclub.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    survey = Repo.get!(Survey, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(survey)

    send_resp(conn, :no_content, "")
  end
end
