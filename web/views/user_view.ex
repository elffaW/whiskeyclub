defmodule Whiskeyclub.UserView do
  use Whiskeyclub.Web, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, Whiskeyclub.UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, Whiskeyclub.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      name: user.name,
      email: user.email}
  end
end
