defmodule Whiskeyclub.Repo.Migrations.CreateSurvey do
  use Ecto.Migration

  def change do
    create table(:surveys) do
      add :appearance, :string
      add :appearance_rating, :integer
      add :aroma, :string
      add :aroma_rating, :integer
      add :taste, :string
      add :taste_rating, :integer
      add :recommend, :boolean, default: false
      add :rec_taste, :string
      add :bottle_design, :string
      add :design_rating, :integer
      add :tasting_date, :datetime
      add :user_id, references(:users, on_delete: :nothing)
      add :whiskey_id, references(:whiskeys, on_delete: :nothing)

      timestamps
    end
    create index(:surveys, [:user_id])
    create index(:surveys, [:whiskey_id])

  end
end
