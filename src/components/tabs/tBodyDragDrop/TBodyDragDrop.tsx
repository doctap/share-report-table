import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  type DropResult,
  Droppable
}
  from 'react-beautiful-dnd';

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  ...draggableStyle,
  background: isDragging ? '#68387a' : 'white',
  display: isDragging ? 'table' : undefined,
  textAlign: 'center',
  color: isDragging ? 'white' : 'black',
  borderRadius: '5px'
});

interface ITBodyDragDrop {
  stocks: Map<string, Array<string | number>>
}

export const TBodyDragDrop = (props: ITBodyDragDrop) => {
  const [items, setItems] = useState(props.stocks);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (destination == null) return;

    const rows = [...items];
    const [newOrder] = rows.splice(source.index, 1);
    rows.splice(destination.index, 0, newOrder);

    setItems(new Map(rows));
  };

  useEffect(() => {
    setItems(props.stocks);
  }, [props.stocks]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='stocks'>
        {provided => (
          <tbody
            {...provided.droppableProps} ref={provided.innerRef}
          >
            {Array.from(items).map((item, index) => {
              return (
                <Draggable key={item[0]} draggableId={item[0]} index={index}>
                  {(provided, snapshot) => (
                    <tr
                      key={item[0]}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                    >
                      {item[1].map((cell, i) => <td key={i}>{cell}</td>)}
                    </tr>
                  )}
                </Draggable>
              );
            })}
          </tbody>
        )}
      </Droppable>
    </DragDropContext>
  );
};
