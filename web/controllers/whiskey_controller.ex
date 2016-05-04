defmodule Whiskeyclub.WhiskeyController do
  use Whiskeyclub.Web, :controller

  alias Whiskeyclub.Whiskey

  plug :scrub_params, "whiskey" when action in [:create, :update]

  def index(conn, _params) do
    whiskeys = Repo.all(Whiskey)
    render(conn, "index.json", whiskeys: whiskeys)
  end

  def create(conn, %{"whiskey" => whiskey_params}) do
    changeset = Whiskey.changeset(%Whiskey{}, whiskey_params)

    case Repo.insert(changeset) do
      {:ok, whiskey} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", whiskey_path(conn, :show, whiskey))
        |> render("show.json", whiskey: whiskey)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Whiskeyclub.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    whiskey = Repo.get!(Whiskey, id)
    render(conn, "show.json", whiskey: whiskey)
  end

  def update(conn, %{"id" => id, "whiskey" => whiskey_params}) do
    whiskey = Repo.get!(Whiskey, id)
    changeset = Whiskey.changeset(whiskey, whiskey_params)

    case Repo.update(changeset) do
      {:ok, whiskey} ->
        render(conn, "show.json", whiskey: whiskey)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Whiskeyclub.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    whiskey = Repo.get!(Whiskey, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(whiskey)

    send_resp(conn, :no_content, "")
  end
end
