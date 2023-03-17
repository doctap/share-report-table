import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  type DropResult,
  Droppable
}
  from 'react-beautiful-dnd';
import { type IStock } from '../../../api';

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  ...draggableStyle,
  background: isDragging ? '#68387a' : 'white',
  display: isDragging ? 'table' : undefined,
  textAlign: 'center',
  color: isDragging ? 'white' : 'black',
  borderRadius: '5px'
});

interface ITBodyDragDrop {
  stocks: IStock[]
}

export const TBodyDragDrop = (props: ITBodyDragDrop) => {
  const [items, setItems] = useState(props.stocks);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (destination == null) return;

    const rows = [...items];
    const [newOrder] = rows.splice(source.index, 1);
    rows.splice(destination.index, 0, newOrder);

    setItems(rows);
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
            {items.map((item, index) => {
              return (
                <Draggable key={item.stockId} draggableId={item.stockId} index={index}>
                  {(provided, snapshot) => (
                    <tr
                      key={item.stockId}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                    >
                      {item.fields.map(cell => <td key={cell}>{cell}</td>)}
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
