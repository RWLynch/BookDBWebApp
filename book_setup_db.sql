CREATE TABLE [dbo].[Books](
	[ID] [int] NOT NULL IDENTITY(1,1) PRIMARY KEY,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[Release Year] [int] NOT NULL,
	[NYTBestSeller] [bit] NOT NULL,
	[AuthorId] [int] NULL
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[BookAuthors](
	[AuthorId] [int] NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](500) NULL,
	[BirthYear] [int] NOT NULL,
) ON [PRIMARY]
GO

INSERT INTO [dbo].[BookAuthors]
           ([AuthorId]
           ,[FirstName]
           ,[LastName]
           ,[BirthYear])
     VALUES
           (1
           ,'Stephen'
           ,'King'
           ,1947)
GO

INSERT INTO [dbo].[BookAuthors]
           ([AuthorId]
           ,[FirstName]
           ,[LastName]
           ,[BirthYear])
     VALUES
           (2
           ,'Dan'
           ,'Brown'
           ,1975)
GO

INSERT INTO [dbo].[BookAuthors]
           ([AuthorId]
           ,[FirstName]
           ,[LastName]
           ,[BirthYear])
     VALUES
           (3
           ,'Lewis'
           ,'Carroll'
           ,1993)
GO

INSERT INTO [dbo].[Books]
            ([Name]
           ,[Description]
           ,[Release Year]
		   ,[NYTBestSeller]
		   ,[AuthorId])
     VALUES
           ('The Shining'
           ,'Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writers block.'
           ,1977
		   ,1
		   ,1)

INSERT INTO [dbo].[Books]
           ([Name]
           ,[Description]
           ,[Release Year]
		   ,[NYTBestSeller]
		   ,[AuthorId])
     VALUES
           ('It'
           ,'When young children in the little town Derry, Maine goes missing a group of seven kids find out that the killer is not a man.'
           ,1986
		   ,1
		   ,1)

INSERT INTO [dbo].[Books]
           ([Name]
           ,[Description]
           ,[Release Year]
		   ,[NYTBestSeller]
		   ,[AuthorId])
     VALUES
           ('The Da Vinci Code'
           ,'Symbologist Robert Langdon and cryptologist Sophie Neveu investigate a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.'
           ,2003
		   ,1
		   ,2)

INSERT INTO [dbo].[Books]
          ([Name]
           ,[Description]
           ,[Release Year]
		   ,[NYTBestSeller]
		   ,[AuthorId])
     VALUES
           ('Alice''s Adventures in Wonderland'
           ,'Alice goes down a rabbit hole to find the mysterious underground Wonderland. She encounters fabulous creatures that defy all reasonable expectations.'
           ,1865
		   ,0
		   ,3)

