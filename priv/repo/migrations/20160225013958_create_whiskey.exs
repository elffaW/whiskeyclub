defmodule Whiskeyclub.Repo.Migrations.CreateWhiskey do
  use Ecto.Migration

  def change do
    create table(:whiskeys) do
      add :name, :string
      add :type, :string
      add :proof, :integer
      add :wood, :string
      add :age, :string
      add :user_id, references(:users, on_delete: :nothing)

      timestamps
    end
    create index(:whiskeys, [:user_id])

  end
end
